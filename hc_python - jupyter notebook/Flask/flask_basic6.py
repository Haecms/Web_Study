from flask import Flask, redirect, url_for, request, render_template

my_count = 0

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("flask_basic6_login.html")

#rest(ful) api
@app.route("/login", methods = ["POST", "GET"])
def login():
    if request.method == "GET":
        user_id = request.args.get("user_id")
        user_pw = request.args.get("user_pw")

    # user_id = input("ID:")
    # user_pw = input("PW:")
        if user_id == "Jo" and user_pw == "1234":
            return redirect(url_for('success')) # 함수 이름 넣어야함
        return "ID 와 PW가 틀렸습니다."
    else:
        user_id = request.form["user_id"]
        user_pw = request.form["user_pw"]
        if user_id == "Jo" and user_pw == "1234":
            return redirect(url_for('success'))
        return "GET아님"

@app.route("/success")
def success():
    return "환영합니다. 웹 서비스를 시작합니다."


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)