# serverless-telegram-bot

Requisitos previos:

- Cuenta Serverless (https://app.serverless.com/)
- Cuenta AWS (https://portal.aws.amazon.com/billing/signup)
- Cliente AWS instalado (https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html)
- Crear un bot en telegram via BotFather (https://t.me/botfather) apuntando el token del bot.


Despliegue:
1. ```aws configure```
2. ```npm ci```
3. ```serverless login```
4. ```serverless deploy --param="token=***TELEGRAM_BOT_TOKEN***"```
