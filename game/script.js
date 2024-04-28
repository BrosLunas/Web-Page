window.addEventListener('DOMContentLoaded', (event) => {
    const fileList = document.getElementById('fileList');

    // Ruta de la carpeta que quieres leer
    const folderPath = './demo/';

    // Llamada a la función para obtener los archivos
    getFilesInFolder(folderPath)
        .then(files => {
            files.forEach(file => {
                const listItem = document.createElement('li');
                listItem.textContent = file;
                fileList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener archivos:', error);
        });
});

// Función para obtener los archivos de una carpeta de forma recursiva
async function getFilesInFolder(folderPath) {
    const response = await fetch(folderPath);
    if (!response.ok) {
        throw new Error('No se pudo obtener la lista de archivos');
    }

    const entries = await response.json();
    let files = [];
    for (const entry of entries) {
        if (entry.isDirectory) {
            // Si es una carpeta, obtener los archivos dentro de ella recursivamente
            const subFiles = await getFilesInFolder(`${folderPath}${entry.name}/`);
            files = files.concat(subFiles);
        } else {
            // Si es un archivo, agregarlo a la lista
            files.push(entry.name);
        }
    }
    return files;
}
