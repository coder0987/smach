FROM nginx

COPY ./smach/dist/ /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/