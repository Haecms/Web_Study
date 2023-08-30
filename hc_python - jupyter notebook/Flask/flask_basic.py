from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "조해찬 입니다 ㅍㅋㅍㅋ"

app.run(host="192.168.0.112", port=5000, debug=True)