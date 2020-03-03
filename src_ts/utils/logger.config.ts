export const errorDailyFileConfiguration = {
  // #auditFile: 'error_edit_audit.json',
  datePattern: 'YYYY-MM-DD',
  dirname: './logs',
  filename: 'errors-%DATE%.log',
  level: 'error',
  maxFiles: '10d',
  maxSize: '5m',
  zippedArchive: true,
};

export const combinedDailyFileConfiguration = {
  // #auditFile: 'combined_audit_file.json',
  datePattern: 'YYYY-MM-DD',
  dirname: './logs',
  filename: 'combined-%DATE%.log',
  // #level: 'info'
  maxFiles: '10d',
  maxSize: '5m',
  zippedArchive: true,
};