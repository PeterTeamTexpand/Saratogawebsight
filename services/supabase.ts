import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gymoomzwesaiytbymcvf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bW9vbXp3ZXNhaXl0YnltY3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTY2ODIsImV4cCI6MjA4MTIzMjY4Mn0.c5pMRz2GCBSK5fTojrRzZh9Rx94expATBHvYZBsZE0M';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Contact submissions
export const sendMessage = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    ]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error(error.message);
  }
  return { success: true };
};

// Fetch all Case Studies
export const getCaseStudies = async () => {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
  return data;
};

// Fetch all Insights
export const getInsights = async () => {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching insights:', error);
    return [];
  }
  return data;
};

// Fetch a single Insight by ID
export const getInsightById = async (id: string) => {
  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching single insight:', error);
    return null;
  }
  return data;
};