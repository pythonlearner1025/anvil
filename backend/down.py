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

def makeAssets(root):
    res = dict()
    for cat in root.keys():
        res[cat] = []
        cat_dict = root[cat]
        for subcat in cat_dict.keys():
            subcat_dict = dict()
            subcat_dict['name'] = subcat
            subcat_dict['selectableObjects'] = []
            for obj in cat_dict[subcat]:
                object_dict = dict()
                object_dict['name'] = list(obj.keys())[0]
                object_dict['assetPath'] = obj[list(obj.keys())[0]]
                subcat_dict['selectableObjects'].append(object_dict)
            res[cat].append(subcat_dict)
    return res



if __name__ == '__main__':
    with open('scraped.json', 'r') as f:
        a = json.load(f)
        assets = makeAssets(a) 
    with open('cats.json', 'w') as f:
        json.dump(assets, f)
    exit() 


