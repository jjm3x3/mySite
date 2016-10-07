require 'date'

if ARGV[0].nil?
  puts "you must provide a filename to generate a blogpost migration"
  exit
end

postContents = File.read(ARGV[0])
splitContents = postContents.split("\n")

readingCode = false
postTextContent = ""
codeSnippits = []
code = ""

splitContents.each do |para|
  if para.strip == "```" && !readingCode
    readingCode = true
  elsif para.strip == "```" && readingCode 
    readingCode = false
    codeSnippits << code
    # puts "built this code snipit:\n #{code}\n"
    postTextContent += "<code/>\\n"
    code = ""
  elsif readingCode
    # puts "read this code:\n#{para}\n"
    code += para + "\n"
  elsif para.include?("![")
    postTextContent += para + "\\n"
  elsif para != ""
    plainPara = para.strip 
    if plainPara.include? "]("
      linkFirstIndex = plainPara.index("](")
      linkSecondIndex = plainPara.index(")", linkFirstIndex)
      
      puts "here is the number first: #{linkFirstIndex}"
    end
    postTextContent += para.strip + "\\n"
  end
end

postTextContent = postTextContent.gsub("\"","\\\"")
# puts postTextContent


if ARGV[1].nil?
  date = DateTime.now.rfc3339
  puts "with out providing a data it will asume todays date () is this alright? (Y/n)"
  answer = STDIN.gets
  puts "why no prompt?... or is there #{answer}"
  answer = answer.strip
  if !(answer == "" || answer == "y" || answer == "Y")
    exit
  end
else
  date = ARGV[1].split("-")
  if date.count < 3
    puts "date must be '-' delimited or else..." 
    exit
  end
  date =  DateTime.new(date[2].to_i, date[0].to_i, date[1].to_i).rfc3339
end
migration = "db.post.insert({\"postBody\": \"#{postTextContent}\", \"codeSnippits\": #{codeSnippits},\"name\":\"Jacob Meixner\", \"date\": new Date(\"#{date}\")});"

File.write("newPostMigration.js", migration)

