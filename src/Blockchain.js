// Import crypto-js/SHA256 library
import SHA256 from 'crypto-js/sha256.js';

// Class with a constructor for block 
export default class BlockChain {
    
    // Class constructor
    constructor(data){
        this.id = 0;
        this.nonce = 144444;
        this.body = data;
        this.hash = "";
    }
    
    // Create a Promise that resolve with `self` after you create the hash of hte object
    generateHash() {
        // Makes it possible ot access this inside the promise
        let self = this;
        // Return promise
        return new Promise((resolve, reject) => {
            const hash = SHA256(self.body); 
            if (hash) {
                self.hash = hash.toString();
                resolve(self);
            } else {
                reject(Error('It broke'));
            }
        });
    }
}