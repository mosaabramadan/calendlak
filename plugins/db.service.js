// import Vue from "vue";
import { create } from 'ipfs-core'
import * as IPFS from 'ipfs';
import * as OrbitDB from 'orbit-db';
import * as dayjs from 'dayjs'
const advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)


export class DbService {
    ipfs = null;
    orbitdb = null;
    db = null;
    data = {

        db: null,
    };

    constructor() {
        console.log("intializing db");
        this.setupDB();
    }

    async setupDB() {
        console.log('creating ipfs')
        this.ipfs = await create({
            repo: '/orbitdb',
            start: true,
            preload: { enabled: false },
            EXPERIMENTAL: { pubsub: true },
            config: {
                Bootstrap: [],
                Addresses: {
                    Swarm: ['/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                        '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
                        '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/']
                }
            }
        });
        console.log('ipfs is online', this.ipfs.isOnline());
        console.log('creating orbitdb instance')
        this.orbitdb = await OrbitDB.createInstance(this.ipfs)
        console.log('orbitdb instance',this.orbitdb)
        
        // 
        
        
    }

    async createDB(name)
    {
        console.log('creating db',name)
        this.db = await this.orbitdb.docstore(name,{
            // Give write access to everyone
            accessController: {
              write: ['*']
            }
          })
        console.log("db address", this.db.address.toString())
        console.log('identity', this.db.identity.toJSON())
        this.db.load();
    }

    async openDB(name)
    {
        console.log('opening db',name)
        this.db = await this.orbitdb.open(name,{ sync: true });
        console.log("db address", this.db.address.toString())
        console.log('identity', this.db.identity.toJSON())
        this.db.load();
    }

    async insertDocument(doc) {
        
        const cid = await this.db.put({ _id: dayjs().format('X').toString(), data: doc });
        console.log('response from put in docsoter', cid)
        const content = await this.ipfs.dag.get(IPFS.CID.parse(cid))
        console.log(content.value.payload)
    }

    getAllDocs() {
        const docs = this.db.get('');
        console.log('docs:', docs);
        return docs;
    }





}