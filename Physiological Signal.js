<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Physiological Signal web server</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f8f9fa;
            color: #343a40;
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            text-align: center;
            margin-bottom: 30px;
        }
        header h1 {
            font-family: 'Pacifico', cursive;
        }
        header img {
            width: 100px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        #integrantes {
            background-color: #e9ecef;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 20px;
        }
        #integrantes ul {
            list-style-type: none;
            padding: 0;
        }
        #integrantes li {
            margin: 10px 0;
            font-weight: bold;
        }
        section {
            margin: 20px;
        }
        section h3 {
            color: #007bff;
            margin-bottom: 20px;
        }
        table {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .table thead {
            background-color: #007bff;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <h1>Physiological Signal</h1>  
        <img src="C:\Users\Edicion\Desktop\website\AnnaRod06.github.io\file.png" alt="Logo del Equipo">
    </header>
    <section id="integrantes">
        <h2>Integrantes </h2>
        <ul>
            <li>Anna Samary Rodriguez Quijano</li>
                   </ul>
    </section>
    <section id="frecuencia-cardiaca">
        <h3>Frecuencia Cardiaca</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Valor (latidos/min)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Datos se insertar�n aqu� -->
            </tbody>
        </table>
    </section>
    <section id="Sensor de temperatura">
        <h3>Sensor de temperatura </h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Valor (C�)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Datos se insertar�n aqu� -->
            </tbody>
        </table>
    </section>
    <section id="pulsioximetro">
        <h3>pulsioximetro</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Valor (%)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Datos se insertar�n aqu� -->
            </tbody>
        </table>
    </section>
</body>
</html>
