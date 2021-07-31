# DEPRECATED
Este repositório não está sendo mantido, não recomendo a utilização deste boilerplate em ambiente de produção!

Teste
# Boilerplate API
Este é um template a ser seguido para padronização de APIs de aplicações ou microserviços que utilizam a tecnologia NodeJS.

## Instalação:

* Instale as dependências do projeto:
```
$ yarn
```

* Instale as dependências globais do projeto:
```
$ yarn global add sequelize-cli
```

* Rode os testes automatizados:
```
$ yarn test
```

* Sirva a aplicação em modo de desenvolvimento:
```
$ yarn dev
```

* Publique a aplicação para ambiente de produção:
```
$ yarn build
```

## Bancos de dados

* Database migrate
```
$ yarn migrate
```

* Database rollback
```
$ yarn rollback
```

* Database refresh
```
$ yarn refresh
```

* Database seed
```
$ yarn seed
```

## Troubleshooting

* Campos Geoespaciais: Utilizar Postgres + PostGIS (em desenvolvimento, homologação e testes automatizados), pois o tipo de banco de dados com maior suporte à campos geoespaciais no Sequelize é o Postgres, em seguida, o MySQL (possui limitações). O sequelize infelizmente ainda não dá suporte à campos geoespaciais para SQLite apesar de já existir extensões para trabalhar com este tipo de dado no SQLite, [leia a documentação](http://docs.sequelizejs.com/class/lib/data-types.js~GEOMETRY.html).