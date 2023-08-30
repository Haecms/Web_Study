from flask import Flask

my_count = 0

app = Flask(__name__)

@app.route("/")
def home():
    return "조해찬 입니다 ㅍㅋㅍㅋ"

@app.route("/page1")
def page1():
    global my_count
    my_count += 1
    return f"<h1>page1 {my_count}번째 방문입니다 ㅍㅋㅍㅋ</h1>"



if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)