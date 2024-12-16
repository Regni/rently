# Rently

Our website can be visited at : [rently](https://rently-app.netlify.app/)

## Bin data

If you want to create your own bin, you will need 3 bins:
1: users
2: bookings
3: items

You can fill the data in them with the dummyData.json in assets if you want.

### .env variables

```
VITE_JSONBIN_API_KEY=
VITE_JSONBIN_BIN_URL_BOOKINGS=
VITE_JSONBIN_BIN_URL_USERS=
VITE_JSONBIN_BIN_URL_ITEMS=
```

### Items

```json
[
{
"id": "ID",
"name": "String",
"description": "String",
"price": "Number",
"category": ["String"]
"publishedDate": "DATE",
"owner": "ID",
"images": ["String"],
"archived": "BOOLEAN"
}]
```

### users

```json
[
{
"id": "ID",
"firstname": "String",
"lastname": "String",
"email": "String",
"password": "String",
"ownedItems": ["ItemID"],
"rentedHistory": ["BookingID"]
}
],
```

### Bookings

```json
[
  {
    "id": "ID",
    "item": "ItemID",
    "renter": "UserID",
    "startDate": "DATE",
    "endDate": "DATE",
    "createdAt": "DATE"
  }
]
```

### ROUTING

```bash
├── HomeView.vue # Landing page med featured items
│
├── ItemsView.vue # Bläddra/sök bland items
├── ItemDetailsView.vue # Detaljerad vy för en specifik item
│
├── renter/
│ ├── MyRentalsView.vue # Aktiva bokningar
│ └── RentalHistoryView.vue # Historik över hyrda items
│
├── owner/
│ ├── MyItemsView.vue # Lista över egna items
│ ├── CreateItemView.vue # Skapa ny item
│ └── EditItemView.vue # Redigera existerande item
│
├── auth/
│ ├── LoginView.vue # Inloggning
│ └── RegisterView.vue # Registrering
│
└── NotFoundView.vue # 404-sida
```

user pages(renter and owner) requires login

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
