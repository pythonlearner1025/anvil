from flask import *
from flask_cors import cross_origin, CORS
import json

app = Flask(__name__)


'''
temp storage plan:
* store all categories/subcategories in asset.json
* pattern-match all imgs when click categories-sub-category
* all imags live in assets
'''

@app.route('/api/read-json', methods=['POST'])
def read_json():
    pass

@app.route('/api/write-json', methods=['POST'])
def write_json():
    pass

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)