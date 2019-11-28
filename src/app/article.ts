export class Article {
    
    private _photo:String;
    private _id:String;
    private _libelle:String;
    private _prix:Number;
    private _mana3rech:boolean;
    //private _dateFabrication:Date;
    //private _dateMiseEnVente:Date;
    //private _dateParution:Date;
    
    constructor(p:String , i:String , l:string , px:number , m:boolean ) {
        this._photo = p;
        this._id = i;
        this._libelle=l;
        this._prix=px;
        this._mana3rech=m;
        //this._dateFabrication=df;
        //this._dateMiseEnVente=dm;
        //this._dateParution=dp;
    }
        
        
        
        public get photo(): String {
            return this._photo;
        }
        public set photo(value: String) {
            this._photo = value;
        }
    
        public get id(): String {
            return this._id;
        }
        public set id(value: String) {
            this._id = value;
        }
        
        public get libelle(): String {
            return this._libelle;
        }
        public set libelle(value: String) {
            this._libelle = value;
        }
        
        public get prix(): Number {
            return this._prix;
        }
        public set prix(value: Number) {
            this._prix = value;
        }
        public get mana3rech(): boolean {
            return this._mana3rech;
        }
        public set mana3rech(value: boolean) {
            this._mana3rech = value;
        }
       /* public get dateFabrication(): Date {
            return this._dateFabrication;
        }
        public set dateFabrication(value: Date) {
            this._dateFabrication = value;
        }
        public get dateMiseEnVente(): Date {
            return this._dateMiseEnVente;
        }
        public set dateMiseEnVente(value: Date) {
            this._dateMiseEnVente = value;
        }
       
        public get dateParution(): Date {
            return this._dateParution;
        }
        public set dateParution(value: Date) {
            this._dateParution = value;
        }*/
       
    }