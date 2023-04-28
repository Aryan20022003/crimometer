const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://akmxvnbpjurwqcppjmar.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbXh2bmJwanVyd3FjcHBqbWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MDU3ODEsImV4cCI6MTk5ODE4MTc4MX0.s-F9cyy8zhaBHJ1kWP4Aq_fPEoIGz7BgILJuKAmK-gs';
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase);
export default supabase;
