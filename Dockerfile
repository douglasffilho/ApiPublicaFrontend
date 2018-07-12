FROM douglasffilho/angular:1.1.1
RUN git clone -b master https://<user>:<password>@github.com/douglasffilho/ApiPublicaFrontend.git
RUN mv start.sh ApiPublicaFrontend/start.sh && cd ApiPublicaFrontend && sh start.sh
