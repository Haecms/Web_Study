from flask import Flask, jsonify



app = Flask(__name__)

@app.route("/")
def home():
    return "조해찬 입니다 ㅍㅋㅍㅋ"

@app.route("/page1")
def page1():
    return "<h1>page1 입니다 ㅍㅋㅍㅋ</h1>"

name = "조해찬"
page2_html =f"""
<html>
    <head>
    </head>

    <body>
        <h1>page2</h1>
        <p>본문입니다.</p>
        <p>이름은 {name}입니다.</p>
    </body>
</html>
""" 

@app.route("/page2")
def page2():
    return page2_html

page3_json = {"key1": 10, "k2":20}
@app.route("/page3")
def page3():
    return jsonify(page3_json)

if __name__ == "__main__":
    app.run(host="192.168.0.112", port=5000, debug=True)