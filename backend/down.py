import json
import os
from tqdm import tqdm
import urllib.request

path = os.path.join(os.getcwd(), 'store/assets')

def down(obj):
    for k in obj:
        f = obj[k].split('/')[-1]
        p = os.path.join(path, f)
        if os.path.isfile(p): continue
        try:
            urllib.request.urlretrieve(obj[k], p)
        except Exception as e:
            print(obj[k])
            pass

if __name__ == '__main__':
    with open('scraped.json', 'r') as f:
        a = json.load(f)
        objs = []
        cats = dict() 
        for cat in a.keys():
            cats[cat] = []
            cat_dict = a[cat]
            for subcat in cat_dict.keys():
                cats[cat].append(subcat)
                for obj in cat_dict[subcat]:
                    objs.append(obj)
    
    with open('cats.json', 'w') as f:
        json.dump(cats, f)
    exit() 
    for i in tqdm(range(len(objs))):
        down(objs[i])

    print(len(os.listdir('/Users/minjunes/anvil/backend/store/assets')))


