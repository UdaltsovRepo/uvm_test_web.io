﻿NDContentPage.OnToolTipsLoaded({36:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype36\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_reg_adapter</div></div></div><div class=\"TTSummary\">This class defines an interface for converting between uvm_reg_bus_op and a specific bus transaction.</div></div>",173:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">2-state data value with `UVM_REG_DATA_WIDTH bits</div></div>",175:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">2-state address value with `UVM_REG_ADDR_WIDTH bits</div></div>",177:"<div class=\"NDToolTip TType LSystemVerilog\"><div class=\"TTSummary\">2-state byte_enable value with `UVM_REG_BYTENABLE_WIDTH bits</div></div>",181:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Return status for register operations</div></div>",185:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Path used for register operation</div></div>",199:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Type of element being read or written</div></div>",203:"<div class=\"NDToolTip TEnumeration LSystemVerilog\"><div class=\"TTSummary\">Type of operation begin performed</div></div>",482:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype482\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_field</div></div></div><div class=\"TTSummary\">Field abstraction class</div></div>",514:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype514\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_map</div></div></div><div class=\"TTSummary\">:Address map abstraction class</div></div>",537:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype537\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern virtual function</span> uvm_sequencer_base get_sequencer (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_hier_e&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">hier</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\">UVM_HIER</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Gets the sequencer for the bus associated with this map. If ~hier~ is set to ~UVM_HIER~, gets the sequencer for the bus at the system-level.&nbsp; See set_sequencer.</div></div>",538:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype538\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">extern virtual function</span> uvm_reg_adapter get_adapter (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_hier_e&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">hier</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\">UVM_HIER</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/6/2/7\" data-NarrowGridArea=\"3/1/4/6\" style=\"grid-area:1/6/2/7\">)</div></div></div></div><div class=\"TTSummary\">Gets the bus adapter for the bus associated with this map. If ~hier~ is set to ~UVM_HIER~, gets the adapter for the bus used at the system-level.&nbsp; See set_sequencer.</div></div>",561:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype561\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_item</div></div></div><div class=\"TTSummary\">Defines an abstract register transaction item. No bus-specific information is present, although a handle to a uvm_reg_map is provided in case a user wishes to implement a custom address translation algorithm.</div></div>",563:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype563\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_elem_kind_e element_kind</div></div><div class=\"TTSummary\">Kind of element being accessed: REG, MEM, or FIELD. See uvm_elem_kind_e.</div></div>",566:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype566\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">rand</span> uvm_reg_data_t value[]</div></div><div class=\"TTSummary\">The value to write to, or after completion, the value read from the DUT.&nbsp; Burst operations use the values property.</div></div>",570:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype570\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_reg_map map</div></div><div class=\"TTSummary\">The original map specified for the operation. The actual map used may differ when a test or sequence written at the block level is reused at the system level.</div></div>",664:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype664\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_reg</div></div></div><div class=\"TTSummary\">Register abstraction base class</div></div>",851:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype851\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_mem</div></div></div><div class=\"TTSummary\">Memory abstraction base class</div></div>",990:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype990\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_sequence_item</div></div></div><div class=\"TTSummary\">The base class for user-defined sequence items and also the base class for the uvm_sequence class. The uvm_sequence_item class provides the basic functionality for objects, both sequence items and sequences, to operate in the sequence mechanism.</div></div>",1029:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1029\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_sequence_base</div></div></div><div class=\"TTSummary\">The uvm_sequence_base class provides the interfaces needed to create streams of sequence items and/or other sequences.</div></div>",1050:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype1050\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">virtual task</span> start_item (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_sequence_item&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">item,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">int</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">set_priority</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">-1</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">uvm_sequencer_base&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">sequencer</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHKeyword\">null</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"3/6/4/7\" data-NarrowGridArea=\"5/1/6/6\" style=\"grid-area:3/6/4/7\">)</div></div></div></div><div class=\"TTSummary\">~start_item~ and finish_item together will initiate operation of a sequence item.&nbsp; If the item has not already been initialized using create_item, then it will be initialized here to use the default sequencer specified by m_sequencer.&nbsp; Randomization may be done between start_item and finish_item to ensure late generation</div></div>",2095:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2095\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">virtual</span></div><div class=\"CPName\">uvm_object</div></div></div><div class=\"TTSummary\">The uvm_object class is the base class for all UVM data and hierarchical classes. Its primary role is to define a set of methods for such common operations as create, copy, compare, print, and record. Classes deriving from uvm_object must implement the pure virtual methods such as create and get_type_name.</div></div>"});