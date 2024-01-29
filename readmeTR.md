
# V14-Slash&Prefix

NodeJS V14 Sürümü İle Desteklenen, Slash Ve Prefix Komutlarını Aynı Anda Çalıştırabilme Yeteneğine Sahip Bir Bot Altyapısı.

- Altyapı içeriğinde bulunan birer tane **Slash** ve **Prefix** komut örneği ile kendi komutlarınızı yazabilirsiniz!
## Gereksinimler
- NodeJS V16+
- Discord Token, Buradan Alabilirsiniz. [Discord Developers Portal](https://discord.com/developers/applications)
- Intents, Buradan Açabilirsiniz. [Discord Developers Portal](https://discord.com/developers/applications)
## Özellikler

- Slash Komutları Destekler
- Prefix Komutları ve Aliases Destekler
- Event Destekler
- Komutları Kategorize Etmenizi Sağlar
## Yükleme & Ayarlama

### Yükleme
1-) Projeyi klonlayın
```bash
npm clone https://github.com/Slayerx10/V14-Slash-Prefix.git
```
2-) Dizini değiştirin
```bash
cd V14-Slash-Prefix
```
3-) NPM paketlerini yükleyin
```bash
npm install
```
### Ayarlama
1-) `config.js` Dosyasının içeriğini botunuza göre özelleştirin
```bash
module.exports = {
    token: "", // Bot tokeninizi girin
    prefix: "", // Botunuzda kullanmak istediğiniz prefixi girin
    botStatus: "" // Botunuz durumunda yazmasını istediğiniz yazıyı girin
}
```
2-) Botu başlatın
```bash
node index.js
```
## Sık Alınan Hatalar

##### 1-) `cannot find module module_name` Hatası

Bu hata sıklıkla karşımıza çıkmaktadır. Hatanın çözümü için şu komutları kullanarak eksik modulü indirebilirsiniz;

Bu komut sadece belirtilen modulü indirir.
```bash
npm install module_name
```
Bu komut ise projeye entegre edilmiş bütün modülleri indirir.
```bash
npm install
```
##### 2-) `Application_Commands_Duplicate_Name` Hatası

Bu hata çoğunlukla **Slash** komutlarınızda iki veya daha fazla komutun aynı isme sahip olmasıyla ortaya çıkar. İsimlerini değiştirerek bu hatayı çözebilirsiniz.

##### 3-) `Error [TokenInvalid]: An invalid token was provided.` Hatası

Bu hata aynı zamanda `unexpected token` hatası olarakta karşımıza çıkabilir. Hatayı düzeltmek için `config.js` dosyasında **token** kısmını düzelterek çözebilirsiniz.

##### 4-) `const chalk = require("chalk");` Hatası

NPM paketinde son zamanlarda çıkan bu hatayı çözmek için şu komutları sırasıyla kullanabilirsiniz;
```bash
npm uninstall chalk
npm install chalk@2
```
## Glitch Kullananların Okuması Önerilir

Glitch üzerinden altyapı kullanımında projelerin çoğunda otomatik olarak pnpm kapalı gelir. Bu npm paketleri yüklemenize engel olur. Bu sorunu pnpm açarak çözebilirsiniz. Açmak için;
```bash
enable-pnpm
```
## Kullanılan Temel Modüller

[Node.JS](https://nodejs.org/)

[Discord.JS](https://discord.js.org/#/)

[NPM](https://www.npmjs.com)
## Projeye destek olmak için ⭐ bırakmayı unutmayın!
## Lisans
Apache-2.0 Lisansı altında dağıtılmaktadır. Daha fazla bilgi için bkz.
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)

- [@Slayerx10](https://github.com/Slayerx10)
