# # nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
# FROM nginx

# # root 에 app 폴더를 생성합니다.
# RUN mkdir /app

# # work dir 고정합니다.
# WORKDIR /app

# # work dir 에 build 폴더 생성 /app/build
# RUN mkdir ./build

# # host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
# ADD ./build ./build

# # nginx 의 default.conf 를 삭제합니다.
# RUN rm /etc/nginx/conf.d/default.conf

# # host pc 의 nginx.conf 를 아래 경로에 복사합니다.
# COPY ./nginx.conf /etc/nginx/conf.d

# # 80 포트 오픈
# EXPOSE 80

# # container 실행 시 자동으로 실행할 command. nginx 시작합니다.
# CMD ["nginx", "-g", "daemon off;"]


#base image 
FROM nginx:1.21-alpine
#copy build files
COPY build /usr/share/nginx/html
#copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf
#expose port
EXPOSE 80
#start nginx server
CMD ["nginx", "-g", "daemon off;"]