from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time, json

# Create a new instance of the Chrome driver
driver = webdriver.Chrome()

# Navigate to the website
driver.get("https://promptomania.com/stable-diffusion-prompt-builder/")

# Wait for the page to load
wait = WebDriverWait(driver, 1.5)

def getTexts(L, name):
    if not isinstance(L, list): return L.find_element(By.TAG_NAME, name).text
    r = []
    for l in L:
        r.append(l.find_element(By.TAG_NAME, name).text)
    return r
         

def getElement(L, name):
    if not isinstance(L, list): return L.find_element(By.CSS_SELECTOR, name)
    r = []
    for l in L:
        r.append(l.find_element(By.CSS_SELECTOR, name))
    return r


def getClass(L, name):
    r = []
    for l in L:
        if name == l.get_attribute("class"):
            r.append(l)
    return r

def getCardGroup(parent):
    c = parent.find_element(By.XPATH, './*')
    return c.find_elements(By.XPATH, './*')

# Find all the div elements with the class "card"
readmore = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.readmore-text.clickable-title")))
readmore[1].click()
mores = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.more")))
mores_child = mores[1].find_elements(By.XPATH, './*')
print("mores c", len(mores_child))
card_wrapper = mores_child[0].find_elements(By.XPATH, './*')
print('card w', len(card_wrapper))
cards = card_wrapper[0].find_elements(By.XPATH, './*')
print('cards', len(cards))
categories = cards
categorytexts = getTexts(getElement(categories, 'div.card-header'), 'h4')
print(categorytexts)

resdict = dict()

for category, categorytext in zip(categories, categorytexts):
    try:
        category.click()
        children = category.find_element(By.CSS_SELECTOR,"div.card-body")
        subcategories = getCardGroup(children)
        subcategorytexts = getTexts(getElement(subcategories, 'div.card-header'), 'h5')
        print(subcategorytexts)
    except Exception as e:
        print(e)
        continue

    for subcategory, subcategorytext in zip(subcategories, subcategorytexts):
        try:
            subcategory.click()
            children = subcategory.find_element(By.CSS_SELECTOR,"div.card-body")
            objs = getCardGroup(children)
        except Exception as e:
            print(e)
            continue
        for obj in objs:
            try:
                img = obj.find_element(By.CSS_SELECTOR, "div.card-img-top") 
                body = obj.find_element(By.CSS_SELECTOR, "div.card-body")

                src = getElement(img, 'img').get_attribute('src')
                name = getTexts(body, 'p')
            except Exception as e:
                print(e)
                continue
            
            if categorytext not in resdict:
                resdict[categorytext] = dict()
            if subcategorytext not in resdict[categorytext]:
                resdict[categorytext][subcategorytext] = [{name: src}] 
            else:
                resdict[categorytext][subcategorytext].append({name: src}) 
                
with open('scraped.json', 'w') as f:
    json.dump(resdict, f)
driver.close()
