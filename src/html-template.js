

module.exports = templateData => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header class="navbar bg-danger text-light d-flex justify-content-center">
        <h1>My Team</h1>
    </header>
    <main>
        <div id="card-container" class="row justify-content-center m-2">
            <div class="card m-3">
                <div class="card-header text-light bg-primary">Jared</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">001</span></li>
                        <li class="list-group-item">Email: <a href="mailto:jared@company.com">jared@company.com</a></li>
                        <li class="list-group-item">Office Number: <span>1</span></li>
                    </ul>
                </div>
            </div>
            <div class="card m-3">
                <div class="card-header text-light bg-primary">Jared</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">001</span></li>
                        <li class="list-group-item">Email: <a href="mailto:jared@company.com">jared@company.com</a></li>
                        <li class="list-group-item">Office Number: <span>1</span></li>
                    </ul>
                </div>
            </div>
            <div class="card m-3">
                <div class="card-header text-light bg-primary">Jared</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">001</span></li>
                        <li class="list-group-item">Email: <a href="mailto:jared@company.com">jared@company.com</a></li>
                        <li class="list-group-item">Office Number: <span>1</span></li>
                    </ul>
                </div>
            </div>
            <div class="card m-3">
                <div class="card-header text-light bg-primary">Jared</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">001</span></li>
                        <li class="list-group-item">Email: <a href="mailto:jared@company.com">jared@company.com</a></li>
                        <li class="list-group-item">Office Number: <span>1</span></li>
                    </ul>
                </div>
            </div>
            <div class="card m-3">
                <div class="card-header text-light bg-primary">Jared</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">001</span></li>
                        <li class="list-group-item">Email: <a href="mailto:jared@company.com">jared@company.com</a></li>
                        <li class="list-group-item">Office Number: <span>1</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
    `
}