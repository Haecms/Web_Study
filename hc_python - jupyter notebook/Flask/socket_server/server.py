import socket
import random

HOST = 'localhost'
PORT = 50007 # 비표준일 경우 포트를 크게 설정해서 실험함

with socket.socket(socket.AF_INET,  # TCP,IP를 사용하겠다.
                   socket.SOCK_STREAM) as s: 
    s.bind( (HOST, PORT) )
    s.listen()
    print("서버가 시작되었습니다.")
    conn, addr = s.accept()

    with conn:
        print(f"클라이언트 {addr}가 접속 되었습니다.")

        while True:
            data = conn.recv(1024).decode('utf-8')
            print(f"수신 데이터: {data}")
            if data == "1001":
                data_return = "1번 모터가 돌아갑니다."
                print(data_return)
            elif data == "1002":
                data_return = "2번 모터가 돌아갑니다."
                print(data_return)
            elif data == "1102":
                data_return = "2번 LED가 켜집니다."
                print(data_return)
            elif data == "1101":
                data_return = "1번 LED가 켜집니다."
                print(data_return)
            #conn.sendall((data+" 무엇을 도와드릴까요?").encode('utf-8'))
            conn.sendall((data).encode('utf-8'))


            
