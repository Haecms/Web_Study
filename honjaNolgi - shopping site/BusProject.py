import requests, xmltodict, json
import pandas as pd


key = "eGd64%2BKKwReSBNO%2FuYgP91ORnHfKn5a8%2BbWxTQXQdqOrGeRVtf%2B%2BFZufsB1Tz6osqB5cnIOjuFycCi9qnp8iIA%3D%3D" # 일반 인증키 라는 부분을 지우고 대입하시면 됩니다. ex) key = "2@dfg3#dafgrt$"
url = "http://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?bstopid=505780000&serviceKey="
url_key = url + key

content = requests.get(url_key).content # GET요청

dict=xmltodict.parse(content) # XML을 dictionary로 파싱
#파싱은 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공하는 것


change_value = dict["response"]["body"]["items"]["item"]


# jsonString = json.dumps(dict['response']['body']['items']['item'], ensure_ascii=False) # dict을 json으로 변환
# jsonString = json.dumps({"List":change_value}, ensure_ascii=False) # dict을 json으로 변환
# jsonObj = json.loads(jsonString) # json을 dict으로 변환

# print(jsonObj)
for i in range(len(change_value)):
    print(str(i) + "  " + change_value[i]['lineno']   + "번 버스")             # lineno   : 버스 번호
    print(str(i) + "  " + change_value[i]['nodenm'])                           # nodenm   : 정류소 명
    print(str(i) + "  " + change_value[i]['min1']     + "분 남았습니다.")       # min1     : 1번 버스 남은 시간
    print(str(i) + "  " + change_value[i]['station1'] + " 정류장 남았습니다.")  # station1 : 1번 버스 남은 정류장
    print(str(i) + "  " + change_value[i]['min2']     + "분 남았습니다.")       # min2     : 2번 버스 남은 시간
    print(str(i) + "  " + change_value[i]['station2'] + " 정류장 남았습니다.")  # station2 : 2번 버스 남은 시간
    print(str(i) + "  " + change_value[i]['bustype']  +"\n")                 # bustype  : 버스 종류(일반, 급행)
