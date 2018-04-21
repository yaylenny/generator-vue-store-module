var Generator = require('yeoman-generator')
var { promise, slugify, pluralize, upper }=require("./utils.js");

module.exports=class extends Generator{
  constructor( args, opt ){
    super( args, opt );
    this.props={};
    this.argument("name", { required: false });
    this.argument("keyword", { required: false });
    if( this.options.name ){
      this.props.name=slugify( this.options.name );
      this.props.NAME=upper( this.props.name );
      if( !this.options.keyword ){
        this.props.keyword=slugify( pluralize( this.options.name ));
        this.props.KEYWORD=upper( this.props.keyword );
      }
    }
    if( this.options.keyword ){
      this.props.keyword=slugify( this.options.keyword );
      this.props.KEYWORD=upper( this.props.keyword );
    }
  }
  prompting(){
    let prompts=[];
    if( !this.props.name ){
      prompts.push(
        {
          type: 'input',
          name: 'name',
          message: 'Module name ~ singular (e,g, client)',
          filter: str=>promise( slugify, str )
        }
      );
    }
    if( !this.props.keyword ){
      prompts.push(
        {
          type: 'input',
          name: 'keyword',
          message: 'keyword ~ plural (e.g. clients)',
          default: ({name})=>promise( pluralize, name )
        }
      );
    }

    if( !prompts.length ) return;
    return this.prompt( prompts ).then(({ name, keyword })=>{
      if( !this.props.name ){
        this.props.name=name;
        this.props.NAME=upper( name );
      }
      if( !this.props.keyword ){
        this.props.keyword=keyword;
        this.props.KEYWORD=upper( keyword );
      }


    });
  }
  writing(){
    this.fs.copyTpl(
      this.templatePath("module.js"),
      this.destinationPath(`${this.props.name}.js`),
      this.props );
  }
}
