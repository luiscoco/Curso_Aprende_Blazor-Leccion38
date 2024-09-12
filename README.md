# CURSO: APRENDE BLAZOR

# LECCIÓN 38: Interoperatibilidad con JavaScript (libreria Toastr)

En esta lección vamos a explicar cómo invocar a las funciones de la libreria de Notificaciones Toastr, desarrollada en JavaScript

https://github.com/CodeSeven/toastr
https://codeseven.github.io/toastr/demo.html

**Nota Importante!**: la librería Toastr require utilizar JQuery en nuestra aplicación
https://cdnjs.com/libraries/jquery

1. Abrir la aplicación con Visual Studio 2022 o VSCode

2. Creamos el archivo (toastrInterop.js) donde definimos nuestra función de JavaScript a invocar desde C#. Localizamos el archivo dentro de una carpeta localizada en wwwroot

// wwwroot/js/toastrInterop.js

```javascript
window.toastrInterop = function (message, title)
{
    if (message == "success") {
        toastr.success(title);
    }
    if (message == "error") {
        toastr.error(title);
    }
    if (message == "warning") {
        toastr.warning(title);
    }
    if (message == "info") {
        toastr.info(title);
    }
}
```

3. Creamos el nuevo componente para invocar desde C# la función toastrInterop() de JavaScript

```razor
@page "/toastr"
@inject IJSRuntime JSRuntime

<h3>Toastr Notification Example</h3>

<button @onclick="ShowSuccessNotification">Show Success</button>
<button @onclick="ShowErrorNotification">Show Error</button>
<button @onclick="ShowWarningNotification">Show Warning</button>
<button @onclick="ShowInfoNotification">Show Info</button>

@code {
    private async Task ShowSuccessNotification()
    {
        // Call the JavaScript function to show a success message
        await JSRuntime.InvokeVoidAsync("toastrInterop", "success", "Success Notification");
    }

    private async Task ShowErrorNotification()
    {
        // Call the JavaScript function to show an error message
        await JSRuntime.InvokeVoidAsync("toastrInterop", "error", "Error Notification");
    }

    private async Task ShowWarningNotification()
    {
        // Call the JavaScript function to show a warning message
        await JSRuntime.InvokeVoidAsync("toastrInterop", "warning", "Warning Notification");
    }

    private async Task ShowInfoNotification()
    {
        // Call the JavaScript function to show an info message
        await JSRuntime.InvokeVoidAsync("toastrInterop", "info", "Info Notification");
    }
}
```

4. Incluimos en el componente App.razor la localización de nuestro archivo example.js

**Note 1:** Copiar las rutas del archivo js y css para incluir Toastr en nuestra aplicación
https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css

**Note 2:** Toastr requiere incluir JQuery en nuestra aplicación
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Incluimos los vínculos de las notas anteriores en nuestro componente App.razor

```razor
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
    <link rel="icon" type="image/png" href="favicon.png" />
```

```razor
    <script src="_framework/blazor.web.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/toastrInterop.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>   
```

5. Creamos un nuevo NavLink en el componente NavMenu.razor para navegar hacia nuestro nuevo componente

```razor
 <div class="nav-item px-3">
     <NavLink class="nav-link" href="toastr">
         <span class="bi bi-list-nested-nav-menu" aria-hidden="true"></span> Componente Toastr
     </NavLink>
 </div>
```

6. Ejecutamos la aplicación




