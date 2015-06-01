names = ["location", "start-date", "end-date",
              "companion", "landmark", "notes"]

output = ""
names.each do |name|
  output.concat "<p>#{name}: <span class='#{name}'></span></p>\n"
end

puts output
