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
        for cat in a.keys():
            cat = a[cat]
            for subcat in cat.keys():
                for obj in cat[subcat]:
                    objs.append(obj)
    
    for i in tqdm(range(len(objs))):
        down(objs[i])

    print(len(os.listdir('/Users/minjunes/anvil/backend/store/assets')))


