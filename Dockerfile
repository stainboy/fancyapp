FROM node:8.2.1-alpine
COPY / /opt/fancyapp/
ENTRYPOINT ["/opt/fancyapp/index.js"]
