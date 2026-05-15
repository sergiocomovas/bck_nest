# 🛠️ bck_nest — Backend con NestJS

![NestJS](https://img.shields.io/badge/NestJS-Backend-E0234E?logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)

Proyecto de backend construido con **NestJS**, el framework progresivo de Node.js para aplicaciones eficientes y escalables del lado del servidor.

> **Propósito:** Proyecto de práctica y aprendizaje del framework NestJS y TypeScript.

---

## 📋 Descripción

Backend de práctica desarrollado para explorar las capacidades de **NestJS**: arquitectura modular, inyección de dependencias, decorators, guards, interceptors y patrones de diseño avanzados en el ecosistema Node.js.

## 🛠️ Stack Tecnológico

- **[NestJS](https://nestjs.com/)** — Framework principal
- **TypeScript** — Tipado estático
- **Node.js** — Runtime
- **Nix** — Configuración del entorno de desarrollo

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Modo desarrollo (con hot-reload)
npm run start:dev

# Modo producción
npm run start:prod
```

El servidor se inicia en `http://localhost:3000`.

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

## 📂 Estructura

```
src/
├── modules/       # Módulos de la aplicación
├── controllers/   # Controladores (rutas)
├── services/      # Lógica de negocio
├── dto/           # Data Transfer Objects
└── entities/      # Entidades
```

## 📖 Recursos

- [Documentación oficial de NestJS](https://docs.nestjs.com)
- [Cursos oficiales](https://courses.nestjs.com)

## 📄 Licencia

[MIT](https://opensource.org/licenses/MIT)

---
Por [Sergio R. González](https://web.comovas.es) · [GitHub](https://github.com/sergiocomovas)
