define(["mvc/relationalmodel","mvc/hasone","sulucontact/models/faxType"],function(a,b,c){return a({urlRoot:"",defaults:{id:null,fax:"",faxType:null},relations:[{type:b,key:"faxType",relatedModel:c}]})});