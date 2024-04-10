const { Builder, By} = require("selenium-webdriver");

describe ('login', ()=>{
    it ('login con selenium en js', async ()=>{ 
        //automatizacion de 1era historia de usuario: validar usuario correcto contraseña incorrecta     

        let driver = new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/v1/');//URL que vamos a testiar.
        await driver. sleep (5000);

        //metodo que ingresa el name user
        await driver.findElement(By.id('user-name')).sendKeys('standard_user'); 
       // await driver. sleep (3000);
       
        
        //metodo que ingresa el password
        await driver.findElement(By.name('password')).sendKeys('secret_saucee');        
       // await driver. sleep (3000);

        //metodo que da click al boton de ingresar
        await driver.findElement(By.id('login-button')).click()
        
        await driver.sleep(5000)
        await driver.quit()

        //automatizacion de 2da historia de usuario el usuario debe estar incorrecto la contraseña esta correcta
        
         driver = new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/v1/');//URL que vamos a testiar.

        //metodo que ingresa el name user
        await driver.findElement(By.id('user-name')).sendKeys('standard_userr'); 
       // await driver. sleep (3000);
       
        
        //metodo que ingresa el password
        await driver.findElement(By.name('password')).sendKeys('secret_sauce');        
        //await driver. sleep (3000);

        //metodo que da click al boton de ingresar
        await driver.findElement(By.id('login-button')).click()
        
        await driver.sleep(5000)
        await driver.quit() 
        
         //automatizacion de 3era historia de usuario: todos las credenciales estan incorrectas
         driver = new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/v1/');//URL que vamos a testiar.

        //metodo que ingresa el name user
        await driver.findElement(By.id('user-name')).sendKeys('standard_userr'); 
        //await driver. sleep (3000);
       
        
        //metodo que ingresa el password
        await driver.findElement(By.name('password')).sendKeys('secret_saucee');        
       // await driver. sleep (3000);

        //metodo que da click al boton de ingresar
        await driver.findElement(By.id('login-button')).click()
        
        await driver.sleep(5000)
        await driver.quit()
        

        //automatizacion de 4ta historia de usuario: todas las credenciales estan correctas
         driver = new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/v1/');//URL que vamos a testiar.

        //metodo que ingresa el name user
        await driver.findElement(By.id('user-name')).sendKeys('standard_user'); 
        //await driver. sleep (3000);
       
        
        //metodo que ingresa el password
        await driver.findElement(By.name('password')).sendKeys('secret_sauce');        
        //await driver. sleep (3000);

        //metodo que da click al boton de ingresar
        await driver.findElement(By.id('login-button')).click()
        
        await driver.sleep(5000)
        await driver.quit()

        
    });
});