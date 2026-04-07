Vagrant.configure("2") do |config|

  # Imagen base
  config.vm.box = "ubuntu/jammy64"

  # Nombre de la VM
  config.vm.hostname = "portafolio-web"

  # Redirección de puerto
  config.vm.network "forwarded_port", guest: 80, host: 8080

  # Carpeta sincronizada
  config.vm.synced_folder "./web", "/var/www/html", create: true

  # Recursos de la VM
  config.vm.provider "virtualbox" do |vb|
    vb.name = "ServidorPortafolio"
    vb.memory = "1024"
    vb.cpus = 1
  end

  # Provisionamiento automático
  config.vm.provision "shell", inline: <<-SHELL
    echo "Actualizando repositorios..."
    apt-get update
    echo "Instalando Apache..."
    apt-get install -y apache2
    echo "Habilitando Apache..."
    systemctl enable apache2
    systemctl start apache2
    echo "Configurando permisos..."
    chown -R www-data:www-data /var/www/html
    chmod -R 755 /var/www/html
    echo "Activando mod_rewrite..."
    a2enmod rewrite
    systemctl restart apache2
    echo "Provisionamiento terminado"
  SHELL

end 