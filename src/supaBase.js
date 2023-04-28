const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://akmxvnbpjurwqcppjmar.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase);
export default supabase;
