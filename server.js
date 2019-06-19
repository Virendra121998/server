const express=require('express');
const hbs=require('hbs');
var app=express();

app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
	res.render('home.hbs',{
        page_title:'HOME_PAGE',
        current_date:new Date().getFullYear()
	});
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
    	
        page_title:'ABOUT_PAGE',
        current_date:new Date().getFullYear()    })
})
app.listen(3000);