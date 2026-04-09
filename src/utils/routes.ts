export const rawRoutes = [
    ['/cusco/4-dias-3-noches', '/cusco/4-days-3-nights'],
    ['/cusco/5-dias-4-noches', '/cusco/5-days-4-nights'],
    ['/cusco/5-dias-4-noches-surhume', '/cusco/5-days-4-nights-surhume'],
    ['/cusco/6-dias-5-noches', '/cusco/6-days-5-nights'],
    ['/puno/3-dias-2-noches', '/puno/3-days-2-nights'],
    ['/puno/4-dias-3-noches', '/puno/4-days-3-nights'],
    ['/tarapoto/6-dias-5-noches', '/tarapoto/6-days-5-nights'],
    ['/tarapoto/4-dias-3-noches', '/tarapoto/4-days-3-nights'],
    ['/tarapoto/5-dias-4-noches', '/tarapoto/5-days-4-nights'],
    ['/ayacucho/4-dias-3-noches', '/ayacucho/4-days-3-nights'],
    ['/mancora/3-dias-2-noches', '/mancora/3-days-2-nights'],
    ['/mancora/4-dias-3-noches', '/mancora/4-days-3-nights'],
    ['/mancora/5-dias-4-noches', '/mancora/5-days-4-nights'],
    ['/selva-central/perene-5-dias-4-noches', '/selva-central/perene-5-days-4-nights'],
    ['/selva-central/perene-4-dias-3-noches', '/selva-central/perene-4-days-3-nights'],
    ['/selva-central/perene-3-dias-2-noches', '/selva-central/perene-3-days-2-nights'],
    ['/selva-central/perene-2-dias-1-noche', '/selva-central/perene-2-days-1-night'],
    ['/iquitos/5-dias-4-noches', '/iquitos/5-days-4-nights'],
    ['/iquitos/4-dias-3-noches', '/iquitos/4-days-3-nights'],
    ['/iquitos/3-dias-2-noches', '/iquitos/3-days-2-nights'],
    ['/arequipa/4-dias-3-noches', '/arequipa/4-days-3-nights'],
    ['/arequipa/3-dias-2-noches', '/arequipa/3-days-2-nights'],
    ['/arequipa/2-dias-1-noche', '/arequipa/2-days-1-night'],
    ['/galeria', '/gallery'],
    ['/esnna', '/esnna']
];

export const routeMap: Record<string, string> = {};

rawRoutes.forEach(([esPath, enPath]) => {
    routeMap[`/es${esPath}`] = `/en${enPath}`;
    routeMap[`/en${enPath}`] = `/es${esPath}`;
});
