FROM nginx:stable

COPY config/dockerfiles/deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY config/dockerfiles/deploy/entrypoint.sh /entrypoint.sh

COPY build /app
COPY build/index.html /app/index.html.tpl 

RUN chmod 755 /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]