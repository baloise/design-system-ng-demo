# Demo Script

## index

```html
<body class="bal-app bal-app-background">
  <app-root class="has-sticky-footer"></app-root>
</body>
```

## App

```html
<header>
  <bal-navbar no-burger>
    <bal-navbar-brand>
      <bal-icon name="logo" inverted size="large"></bal-icon>
      <bal-text class="ml-3" bold>Open X Day Demo</bal-text>
    </bal-navbar-brand>
  </bal-navbar>
</header>
<main>
  <div class="container">
    <!-- Page content -->
    <router-outlet></router-outlet>
  </div>
</main>
<footer class="footer">
  <div class="container">
    <span class="mr-3">Baloise Group</span>
    <span class="mr-3">Legal notice</span>
    <span class="mr-3">Cookie policy</span>
    <span>Data protection</span>
  </div>
</footer>
```

## First Page

```html
<bal-card class="mt-6">
  <bal-card-title>Title</bal-card-title>
  <bal-card-content>
    <div class="columns is-multiline mt-0">
      <bal-field class="column is-half py-0" expanded>
        <bal-field-label required>Firstname</bal-field-label>
        <bal-field-control>
          <bal-input
            name="firstName"
            placeholder="Enter your firstname"
          ></bal-input>
        </bal-field-control>
        <bal-field-message></bal-field-message>
      </bal-field>

      <bal-field class="column is-half py-0" expanded>
        <bal-field-label required>Lastname</bal-field-label>
        <bal-field-control>
          <bal-input
            name="lastName"
            placeholder="Enter your lastname"
          ></bal-input>
        </bal-field-control>
        <bal-field-message></bal-field-message>
      </bal-field>
    </div>
  </bal-card-content>
  <bal-card-actions right>
    <bal-button (click)="next()">Next</bal-button>
  </bal-card-actions>
</bal-card>
```

## Second Page

```html
<bal-card class="mt-6">
  <bal-card-title>Title</bal-card-title>
  <bal-card-content>
    <div class="columns is-multiline mt-0">
      <bal-field class="column is-half py-0" expanded>
        <bal-field-label required>Firstname</bal-field-label>
        <bal-field-control>
          <bal-input
            name="firstName"
            placeholder="Enter your firstname"
          ></bal-input>
        </bal-field-control>
        <bal-field-message></bal-field-message>
      </bal-field>

      <bal-field class="column is-half py-0" expanded>
        <bal-field-label required>Lastname</bal-field-label>
        <bal-field-control>
          <bal-input
            name="lastName"
            placeholder="Enter your lastname"
          ></bal-input>
        </bal-field-control>
        <bal-field-message></bal-field-message>
      </bal-field>
    </div>
  </bal-card-content>
  <bal-card-actions right>
    <bal-button (click)="next()">Next</bal-button>
  </bal-card-actions>
</bal-card>
```
