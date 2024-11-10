import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://rusyvkqjhxhzukctrldq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1c3l2a3FqaHhoenVrY3RybGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzIyNDUsImV4cCI6MjA0MzgwODI0NX0.FWjpOA1Gh59NWTv6yuhBU6V__2-DzZgGbf1iyXrCSqk')

async function updateMoney() {

    // fetch
    const {userData, fetcherror} = await supabase
    .from('user')
    .select('money')
    .eq('email', 1) 
    .single()

    if (fetcherror) {
        console.error('Error updating data:', fetcherror)
        return;
    }

    const newMoney = userData.money + 5;

    // update
    const {data, error } = await supabase 
    .from('user')
    .update({money: newMoney})
    .eq('email', 1)
    .select();

    if (error) {
        console.error('Error updating data:', error)
        return;
    }

    console.log('Updated data:', data)
}
