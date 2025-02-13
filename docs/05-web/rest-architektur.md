---
description: ""
sidebar_position: 1
title: "REST-Architektur"
---
Die REST-Architektur (**Representational State Transfer**) ist ein Architekturstil für verteilte Systeme, insbesondere für das Web. Sie wurde von Roy Fielding in seiner Dissertation im Jahr 2000 beschrieben und ist seitdem ein weit verbreiteter Ansatz für die Gestaltung von Netzwerkkommunikation, insbesondere für Web-APIs. 

### Grundprinzipien der REST-Architektur

1. **Ressourcen**: 
   - In REST wird alles als Ressource betrachtet. Eine Ressource kann ein Dokument, ein Bild, ein Benutzer oder ein Service sein. Ressourcen werden durch URIs (Uniform Resource Identifiers) eindeutig identifiziert.

2. **Repräsentationen**:
   - Ressourcen können in verschiedenen Formaten dargestellt werden, wie JSON, XML, HTML oder Plain Text. Die Repräsentation einer Ressource wird dem Client zurückgegeben.

3. **Statische Adressierung**:
   - Jede Ressource muss eine stabile und eindeutige Adresse (URI) haben. Die URI bleibt gleich, unabhängig von der Repräsentation oder dem Zustand der Ressource.

4. **HTTP-Verben**:
   - REST verwendet die Standard-HTTP-Methoden, um Operationen auf Ressourcen auszuführen. Die wichtigsten HTTP-Verben sind:
     - **GET**: Abrufen einer Ressource.
     - **POST**: Erstellen einer neuen Ressource.
     - **PUT**: Aktualisieren einer bestehenden Ressource.
     - **DELETE**: Löschen einer Ressource.
     - **PATCH**: Teilweise Aktualisierung einer Ressource.

5. **Zustandslose Interaktionen**:
   - Jede Anfrage vom Client an den Server muss alle Informationen enthalten, die notwendig sind, um sie zu verstehen und zu verarbeiten. Der Server speichert keinen Client-Zustand zwischen den Anfragen. Das bedeutet, dass jede Anfrage unabhängig ist und der Server keine Kenntnis von früheren Anfragen hat.

6. **Cachebarkeit**:
   - Antworten sollten explizit als cacheable oder non-cacheable markiert sein. Caching verbessert die Leistung und Skalierbarkeit von Webanwendungen, indem es redundante Abrufe vermeidet.

7. **Schichtenarchitektur**:
   - Ein REST-System kann durch mehrere Schichten bestehen, wobei jede Schicht eine spezifische Funktion hat und unabhängig von den anderen Schichten ist. Dies erhöht die Flexibilität und Skalierbarkeit des Systems.

### Beispiel für eine REST-API

Stellen wir uns eine REST-API für die Verwaltung von Benutzerressourcen vor. Hier sind einige Beispiel-URIs und die zugehörigen HTTP-Methoden:

- **GET /users**: Abrufen aller Benutzer.
- **GET /users/`{id}`**: Abrufen eines bestimmten Benutzers anhand der ID.
- **POST /users**: Erstellen eines neuen Benutzers.
- **PUT /users/`{id}`**: Aktualisieren eines bestimmten Benutzers anhand der ID.
- **DELETE /users/`{id}`**: Löschen eines bestimmten Benutzers anhand der ID.

### Beispiel in Python mit Flask

Hier ist ein einfaches Beispiel für eine REST-API in Python mit dem Flask-Framework:

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user is not None:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

@app.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user is not None:
        update_data = request.get_json()
        user.update(update_data)
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [user for user in users if user['id'] != user_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
```