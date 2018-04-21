

const upper=str=>str.toUpperCase();
const lower=str=>str.toLowerCase();
const last=str=>str[ str.length-1 ];
const pluralize=str=>str+(last(str)==='s' ? '' : 's');
const replace=( str, bad, good )=>str.split( bad ).join( good );
const capitalize=str=>( upper( str[0 ] )+str.slice( 1 ));
const promise=( fn, str )=>new Promise((r,x)=>r(fn( str )));
const nocharsRegex=/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
const nochars=str=>str.replace( nocharsRegex, '')
const slugify=str=>lower( nochars( str ));

module.exports={
  upper, lower, last, pluralize, replace, slugify, capitalize, promise
}
