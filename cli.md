```
ng new ws-softtek --create-application false --skip-install true

ng g application softtek-web --defaults true --inline-style true --prefix stk-web --routing true --skip-install true --style css

npm install

ng add @angular-eslint/schematics
npm install prettier -D
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier —D

npm run lint

ng g m core --module app.module.ts
ng g c core/header --export true
ng g c core/footer --export true

npm run lint

ng g m home --module app.module --route 'home'
ng g c home/operators
ng g resolver home/home

npm run lint


npm install -D json-server json-server-auth

```
