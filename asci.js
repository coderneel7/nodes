var buf=new Buffer.alloc(26);

for(let i=0;i<26;i++){
    buf[i]=i+97;
}
console.log(buf.toString());
