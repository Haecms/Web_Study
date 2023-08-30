from flask import Flask, render_template, request

my_count = 0

app = Flask(__name__)

@app.route("/")
def home():
    my_points = [67, 78, 89]
    my_dics = {"해찬":"일어학과", "명서": "축산학과"}
    """
    code1 = ""
    code1 += "<p>"
    code1 += "우리반 학생들의 학부 전공은 다음과 같다."
    code1 += "<ul>"
    for name, major in my_dics:
        code1 += f"<li>이름: { name }, 학과: { major }</li>"
    code1 += "</ul></p>"
    """
    return render_template("flask_basic7.html", pts = my_points,
                                                my_dics = my_dics,
                                                )#code1 = code1)

@app.route("/score", methods = ["GET"])
def score():
    score = request.args.get("score")
    return render_template("flask_basic_score.html", pt = int(score))


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)