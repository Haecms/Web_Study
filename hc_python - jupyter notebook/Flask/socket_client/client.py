import socket

IP   = "localhost"
PORT = 50007

with socket.socket(socket.AF_INET,
                   socket.SOCK_STREAM) as s:
    s.connect( (IP, PORT) )

    while True:
        mes = input("메시지 입력해요")
        s.sendall(mes.encode('utf-8'))

        data = s.recv(1024).decode('utf-8')
        print(f"서버 응답: {data}")
        if data == "END":
            break;