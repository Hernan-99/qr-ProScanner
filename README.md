# 📱 QR Pro Scanner

Aplicación móvil android desarrollada con react native y expo. El objetivo fue crear algo simple y util para escanear y generar códigos QR.

---

## Indice

- [Caracteristicas](#Caracteristicas)
- [Stack tecnologico](#Stack)
- [Navegacion](#Navegacion)
- [Casos de uso](#UseCases)
- [Instalacion](#Instalacion)
- [Dependencias](#Dependencias)
- [Escalamiento](#Escalamiento)

---

## Caracteristicas

- Escaneo de códigos QR usando la cámara del dispositivo
- Navegación con Expo Router
- Redireccionamiento automatico hacia el qr escaneado
- Generacion de QR a partir de links con archivs publicos de google drive
- Compatible con **Expo Go** y emuladores Android

---

## Stack

- **React Native**
- **Expo SDK 54**
- **Expo Camera**
- **Expo Router**
- **JavaScript (ES6+)**

---

## Navegación

La navegación se maneja mediante **Expo Router** basado en el sistema de archivos.

```js
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
```

Donde cada archivo dentro de `app/` representa una ruta.

---

## UseCases

#### **CU-01: Iniciar la aplicación**

| Campo      | Descripción                                           |
| ---------- | ----------------------------------------------------- |
| **Como**   | Usuario                                               |
| **Quiero** | Abrir la aplicación y accede a la pantalla principal. |
| **Para**   | Comenzar.                                             |

---

#### CU-02: Acceder al menú de acciones

| Campo      | Descripción                                                         |
| ---------- | ------------------------------------------------------------------- |
| **Como**   | Usuario                                                             |
| **Quiero** | Presiona el botón **Comenzar**.                                     |
| **Para**   | Navegar a la pantalla **Get Started** con las opciones disponibles. |

---

#### CU-03: Solicitar permisos de cámara

| Campo           | Descripción                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| **Como**        | Usuario                                                                                 |
| **Quiero**      | Escanear un QR por primera vez habilitando permisos de acceso a la cámara.              |
| **Descripcion** | Si acepta → se habilita la cámara. <br> Si rechaza → la aplicación no permite escanear. |

---

#### CU-04: Escanear un código QR

| Campo      | Descripción                                                      |
| ---------- | ---------------------------------------------------------------- |
| **Como**   | Usuario                                                          |
| **Quiero** | Escanear un código QR.                                           |
| **Para**   | Que el sistema lo detecte y me redirija al contenido del código. |

---

#### CU-08: Volver a la pantalla anterior

| Campo      | Descripción                      |
| ---------- | -------------------------------- |
| **Como**   | Usuario                          |
| **Quiero** | Presionar el botón **Volver**.   |
| **Para**   | Navegar a la pantalla principal. |

---

#### CU-09: Acceder a la pantalla de generación de QR

| Campo      | Descripción                                                                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Como**   | Usuario                                                                                                                                                                    |
| **Quiero** | Presionar el boton **Generar QR**.                                                                                                                                         |
| **Para**   | Navegar a la pantalla de generación, donde el pueda ingresar un enlace y generar un código QR que se descargará automáticamente luego de conceder los permisos necesarios. |

---

## ⚙️ Configuración

### Instalación

#### Clonar repositorio

```js
git clone https://github.com/Hernan-99/qr-ProScanner
```

```js
cd qr-ProScanner
```

#### Instalar dependencias

```bash
npm install
npx expo start
```

Luego escanear el QR con **Expo Go**.

---

## Dependencias

```json
"expo": "~54.0.31",
"expo-camera": "~17.0.10",
"expo-router": "~6.0.21",
"react-native": "0.81.5"
```

---

## Escalamiento a futuro

- Historial de escaneos
- Copiar contenido al portapapeles
- Generador de QR personalizado
- Persistencia
- Animaciones
- Migrar a TypeScript
