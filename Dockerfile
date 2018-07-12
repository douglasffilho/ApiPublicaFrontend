FROM douglasffilho/angular-cli:1.1.1
RUN git clone -b master https://<user>:<password>@github.com/douglasffilho/ApiPublicaFrontend.git
RUN cd ApiPublicaFrontend
RUN npm install
RUN npm start
