<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Laravel</title>
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
		<style type="text/css">
			html, body {
                background-color: #fff;
				color: #636b6f;
			}
			#app-name {
				font-size: 58px;
				color: #636b6f;
			}
			.links > a {
                color: #636b6f !important;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }
		</style>
    </head>
    <body>
		<div id="app">
			<v-app>
				<v-container fluid fill-height>
					<v-layout justify-center align-center>
						<v-flex xs="12" sm="12" md="12" lg="12" text-center>
							<h1 id="app-name">Laravel + Vue + TypeScript</h1><br />
							<div class="links">
								<a target="_blank" href="http://addb-bakery.herokuapp.com">Demo</a>
								<a target="_blank" href="https://github.com/chinloyal/addb-bakery">Demo GitHub</a>
								<a target="_blank" href="https://laracasts.com">Laracasts</a>
								<a target="_blank" href="https://laravel-news.com">News</a>
								<a target="_blank" href="https://blog.laravel.com">Blog</a>
								<a target="_blank" href="https://nova.laravel.com">Nova</a>
								<a target="_blank" href="https://forge.laravel.com">Forge</a>
								<a target="_blank" href="https://vapor.laravel.com">Vapor</a>
								<a target="_blank" href="https://github.com/chinloyal/laravel-vue-typescript-starter-project">Template GitHub</a>
							</div>
						</v-flex>
					</v-layout>
				</v-container>
			</v-app>
        </div>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
		<script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
