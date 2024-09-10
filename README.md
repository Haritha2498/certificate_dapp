##  CertLedger :ledger: :scroll: ##
CertLedger DApp is an innovative decentralized application that leverages blockchain technology to manage digital certificates with enhanced security and transparency. With CertLedger, users can easily create new certificates by entering their details, such as name, course, and date of issuance. Once created, these certificates are securely recorded on the blockchain, ensuring they are immutable and tamper-proof.

CertLedger also allows users to retrieve their certificates at any time by simply providing the corresponding certificate ID. This feature ensures that certificates are always accessible and verifiable, providing a trustworthy way for individuals and institutions to manage and authenticate important documents. The use of blockchain technology guarantees that all certificates stored on CertLedger are permanent, auditable, and resistant to unauthorized changes.

## 🎯 Purpose ##
The purpose of CertLedger DApp is to provide a secure, transparent, and reliable platform for issuing, managing, and verifying digital certificates using blockchain technology. By leveraging the immutable and decentralized nature of blockchain, CertLedger ensures that certificates are tamper-proof and easily accessible. 

## 🛠 **Built With**

![NodeJS](https://img.icons8.com/color/48/000000/nodejs.png) ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) ![ReactJS](https://img.icons8.com/color/48/000000/react-native.png) ![Ethereum](https://img.icons8.com/ios-filled/50/000000/ethereum.png) ![Vite](https://img.icons8.com/fluency/48/000000/vite.png)


## ⚙️ Run Locally ##



Clone the Project and change into the directory
```bash
git@github.com:Haritha2498/certificate_dapp.git

```
open the folder in VScode<br>
In terminal ,Install dependencies

```bash
npm init
npm i -D hardhat
```
In [hardhat.config.js](https://github.com/Haritha2498/certificate_dapp/blob/main/hardhat.config.js) file,add your private key across the accounts section in this code;

```bash
infura:{
      url:"https://sepolia.infura.io/v3/66d60f103eac4256995259d73ede2b51",
      accounts:[""]
    },
```
To initailize hardhat nodes
```bash
npx hardhat node

```
To Deploy,in another terminal
```bash
npx hardhat ignition deploy ignition/modules/Cert.js
```
To Run the application
```bash
cd certiui
npm run dev
```

## :video_camera: Demo ##
Watch demo vedio:<br>
<a href="https://youtu.be/RXj-0NdUiro">
    <img src="https://github.com/Haritha2498/certificate_dapp/blob/main/certiui/src/assets/images/certidapp%20YouTube%20Thumbnail.png" alt="demo video" width="200" />
</a>




## :ribbon: Contributing ##
The open source community thrives on the contributions of its members, making it a remarkable space for learning, inspiration, and innovation. Every contribution you offer is deeply valued.

Should you have ideas to enhance this, kindly fork the repository and initiate a pull request. Alternatively, you can open an issue and tag it with enhancement. Remember to star the project! Many thanks!

Fork the Project
Create your Feature Branch (git checkout -b feature/<feature_name>)
Commit your Changes (git commit -m '<feature_name>_added')
Push to the Branch (git push origin feature/<feature_name>)
Open a Pull Request
## :page_with_curl: License ##
This project is licensed under the MIT license - see the [LICENSE.md](https://github.com/Haritha2498/certificate_dapp/blob/main/LICENSE) file for details.
