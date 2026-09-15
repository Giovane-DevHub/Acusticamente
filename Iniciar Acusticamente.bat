@echo off
title Acusticamente - Servidor Local
echo ===================================================
echo           INICIANDO ACUSTICAMENTE
echo ===================================================
echo.

if exist "%~dp0package.json" (
    cd /d "%~dp0"
) else (
    cd /d "D:\Projetos\Acusticamente"
)

echo Abrindo o navegador em http://localhost:3000 ...
start http://localhost:3000

echo Iniciando servidor Vite...
echo Para encerrar o sistema, basta fechar esta janela.
echo.
npm run dev
pause
